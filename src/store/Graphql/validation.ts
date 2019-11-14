import { IEmployerQuery } from './types';

var rules_hash = {
id_token: 'string',
citizen_first_name: 'string',
citizen_last_name: 'string',
citizen_position: 'string',
citizen_organization: 'string',
organization_division: 'string',
organization_location_text: 'string',
organization_location_lng: 'number' ,
organization_location_lat: 'number' ,
organization_industry: 'number' ,
organization_industry_other: 'string',
organization_product_list: 'string[]',
organization_product_employee_count: 'string',
program_externship_time_first: 'string' ,
program_externship_time_second: 'string' ,
program_externship_time_third: 'string' ,
program_externship_options: 'number' ,
program_externship_options_other: 'string',
projects_min: 'number' ,
projects_max: 'number' ,
projects_engagement: 'number' ,
projects_engagement_2: 'number' ,
projects_solutions: 'string[]' ,
internships_project: 'number' ,
internships_project_other: 'string',
internships_hiring_adult: 'boolean',
internships_travel: 'number' ,
internships_education: 'number' ,
internships_education_other: 'string',
internships_talent: 'number' ,
internships_hours_week: 'number' ,
internships_hours_day: 'number' ,
internships_employer_of_record: 'number' ,
internships_compensation: 'number' ,
internships_budget_min: 'number' ,
internships_budget_max: 'number' ,
internships_interview_option1: 'string' ,
internships_interview_option2: 'string' ,
internships_interview_option3: 'string' ,
internships_employment: 'boolean',
internships_position: 'number' ,
}
var rules_hash1 = rules_hash as ((typeof rules_hash) & {[key: string]: string})
function isNonEmptyArrayOfStrings(value: any): boolean {
    return !!(Array.isArray(value) && value.length && value.every(item => typeof item === "string"));
}
function ezvalidate(value:any,type:string){
    if(type === "string[]" && isNonEmptyArrayOfStrings(value))
        return true
    else
        return (typeof value) === type
}
export function validateQuery(obj:IEmployerQuery):boolean{
    var obj1 = obj as IEmployerQuery & {[key: string]: string}
    for (let key in obj1){
        if(!ezvalidate(obj1[key],rules_hash1[key]))
            throw(`${key} is not ${rules_hash1[key]}`)
    }
    return true
}
