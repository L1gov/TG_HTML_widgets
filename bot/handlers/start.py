from aiogram import Router
from aiogram.types import Message
from aiogram.filters import CommandStart


router = Router(name="start")

@router.message(CommandStart())
async def cmd_start(message:Message)->None:
    await message.answer("Старт")

