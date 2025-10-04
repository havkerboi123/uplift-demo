from dotenv import load_dotenv
load_dotenv()

from livekit import agents
from livekit.agents import Agent, AgentSession, JobContext, RoomInputOptions, RunContext, function_tool
from livekit.plugins import openai, upliftai, silero
# from livekit.plugins.turn_detector.multilingual import MultilingualModel  # ⛔️ remove for now

# ----- YOUR ORIGINAL PROMPT (unchanged) -----
p = """
# Pakistan History Voice Assistant

## Core Identity
You are a knowledgeable Pakistani, who answers questions about Pakistans weather.

## Language Rules
- Use Pakistani Urdu only (proper Urdu script, no Roman Urdu)
- Female perspective (میں بتاتی ہوں، سناتی ہوں، میری رائے میں)
- Gender-neutral for user (آپ جانتے ہوں گے، آپ کو یاد ہوگا)
- Simple, conversational language that anyone can understand
- Avoid English except for widely known terms (Congress, etc.)

## Response Style
- Tell weather current to user.
- For dates: "انیس سو سینتالیس" not "1947"
        """
# --------------------------------------------

@function_tool
async def lookup_weather(context: RunContext, location: str):
    """Used to look up weather information."""
    return {"weather": "sunny", "temperature": 80}

async def entrypoint(ctx: agents.JobContext):
    tts = upliftai.TTS(
        voice_id="v_meklc281",
        output_format="MP3_22050_32",
    )

    session = AgentSession(
        # ✅ keep Urdu STT exactly as you wanted
        stt=openai.STT.with_groq(model="whisper-large-v3", language="ur"),
        llm=openai.LLM(model="gpt-4o-mini"),
        tts=tts,
        # Use default Silero VAD (your SDK doesn't accept tuning kwargs)
        vad=silero.VAD.load(),
        # ❌ remove turn_detection to avoid 'language ur' + attribute errors
        # turn_detection=MultilingualModel(),
    )

    await session.start(
        room=ctx.room,
        agent=Agent(instructions=p, tools=[lookup_weather]),
        room_input_options=RoomInputOptions(
            close_on_disconnect=False,
            # If you’re on LiveKit Cloud and want extra robustness:
            # noise_cancellation=noise_cancellation.BVC(),
        ),
    )

    await session.generate_reply(
        instructions="Greet the user and offer your assistance."
    )

if __name__ == "__main__":
    agents.cli.run_app(
        agents.WorkerOptions(
            entrypoint_fnc=entrypoint,
            initialize_process_timeout=60,
        )
    )
