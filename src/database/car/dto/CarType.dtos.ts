import { IsEmail, isNotEmpty, isInt, Length} from "class-validator";

export class CreateCarTypeDto {
    @isNotEmpty()
    @isInt()
    carTypeId: number;

    @isNotEmpty()
    @Length(0,20)
    name: string;
}