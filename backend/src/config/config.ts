import dotenv from "dotenv"
dotenv.config()

    if(!process.env.DATABASE_URI){
        console.error(" database uri is not defined ")
    }

type Config={
    DATABASE_URI: string |undefined, 
    JWT_SECRET:string,
}

const config: Config ={
    DATABASE_URI:process.env.DATABASE_URI || "",
    JWT_SECRET:process.env.JWT_SECRET || ""
}


export default config 