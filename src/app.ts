import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { userRouter } from "./users/user.routes" // inserted here from USERS
import { productRouter } from "./products/product.routes" // inserted here from PRODUCTS

dotevnv.config()

if (!process.env.PORT)
{
    console.log('No port value specified...')
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())

app.use('/', userRouter) // inserted here from USERS
app.use('/', productRouter) // inserted here from PRODUCTS

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
