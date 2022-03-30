import { InferAttributes, InferCreationAttributes, Model } from "sequelize";

export class BlacklistUsers extends Model<InferAttributes<BlacklistUsers>, InferCreationAttributes<BlacklistUsers>> {
    declare user_id: string
}