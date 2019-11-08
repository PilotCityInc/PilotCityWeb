export {IEmployerQuery} from "@/store/Graphql/types"
import { ProgramDetails } from './types'
import {AutoCompleteAddress} from "@/components/GoogleMaps"
export interface Citizen {
    first_name: string;
    last_name: string;
    position: string;
    organization: string;
}

export interface Organization {
    department: string[];
    location: AutoCompleteAddress;
    industry: string[];
    products_services: string[];
    employee_count: string;
}

export interface ProgramDetails {
    year: string;
    externship: {
        prefered_date: {
            primary: string;
            secondary: string;
            final: string;
        };
        contribution: string[];
    };
    project: {
        capacity: {
            maximum: number;
            minimum: number;
        };
        engagement: {
            type: string;
            radius: string;
        };
    };
}
export interface Internship {
    project: string[];
    hiring_adult: string;
    travel: string;
    education_level: string[];
    talent: string[];
    days_week: number;
    hours_day: number;
    employer_of_record: string;
    compensation: string[];
    budget_min: number;
    budget_max: number;
    interview_1: string;
    interview_2: string;
    interview_3: string;
    employment: boolean;
    position_type: string[];

}

export interface EmployerPage{
    Citizen:Citizen
    Organization:Organization
    ProgramDetails:ProgramDetails
    Internship:Internship
}




