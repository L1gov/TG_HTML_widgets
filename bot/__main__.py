import asyncio

import structlog
from structlog.typing import FilteringBoundLogger

from aiogram import Bot, Dispatcher 
from bot.config import Settings
from bot.logging_config import get_structlog_config
from bot.handlers import get_routers
logger: FilteringBoundLogger = structlog.get_logger()


async def main()-> None:
    settings = Settings() 

    structlog.configure(**get_structlog_config(settings.logs))


    bot = Bot(
        token=settings.bot.token.get_secret_value(),
    )

    dp = Dispatcher()
    dp.include_router(*get_routers())



    await logger.ainfo("Starting polling...")
    try:
        await dp.start_polling(bot)
    finally:
        await logger.ainfo("Bot stopped")

asyncio.run(main())