import app from './app.js'
import config from './config/config.js'
import logger from './util/logger.js'

const server = app.listen(config.PORT)

;(() => {
    try {
        // Database connection
        logger.info(`APPLICATION STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (error) {
        logger.error(`APPLICATION ERROR`, {
            meta: error
        })

        server.close((error) => {
            if (error) {
                logger.error(`APPLICATION ERROR`, {
                    meta: error
                })
            }

            process.exit(1)
        })
    }
})()
