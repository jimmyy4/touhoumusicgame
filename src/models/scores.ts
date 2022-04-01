import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export class Scores extends Model<InferAttributes<Scores>, InferCreationAttributes<Scores>> {
    declare user_id: string
    declare wins: number
    declare guess_rates: string
}