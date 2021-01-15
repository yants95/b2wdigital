import 'module-alias/register'
import env from '@/main/config/env'
import app from './config/app'


app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))