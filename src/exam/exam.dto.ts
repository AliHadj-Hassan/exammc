import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ExamDto {

    @IsString()
    @IsNotEmpty()
    title;

    @IsString()
    @IsNotEmpty()
    category;

    @IsString()
    @IsNotEmpty()
    language

    @IsNumber()
    @IsNotEmpty()
    totaNumberOfQuestion;
    @IsArray()
    @IsNotEmpty()
    requirements;

}