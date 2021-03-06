import gql from 'graphql-tag'

export const EMPLOYER_QUERY = gql`mutation createEmployerProfile(
  $id_token: String!,
  $citizen_first_name: String!,
  $citizen_last_name: String!,
  $citizen_position: String!,
  $citizen_organization: String!,
  $organization_division: String!,
  $organization_location_text: String!,
  $organization_location_lng: Float!,
  $organization_location_lat: Float!,
  $organization_industry: Int!,
  $organization_industry_other: String!,
  $organization_product_list: [String]!,
  $organization_product_employee_count: String!,
  $program_externship_time_first: String!,
  $program_externship_time_second: String!,
  $program_externship_time_third: String!,
  $program_externship_options: Int!,
  $program_externship_options_other: String!,
  $projects_min: Int!,
  $projects_max: Int!,
  $projects_engagement: Int!,
  $projects_engagement_2: Int!,
  $projects_solutions: [String]!
  $internships_project: Int!,
  $internships_project_other: String!,
  $internships_hiring_adult: Boolean!,
  $internships_travel: Int!,
  $internships_education: Int!,
  $internships_education_other: String!,
  $internships_talent: Int!,
  $internships_hours_week: Int!,
  $internships_hours_day: Int!,
  $internships_employer_of_record: Int!,
  $internships_compensation: Int!,
  $internships_budget_min: Int!,
  $internships_budget_max: Int!,
  $internships_interview_option1: String!,
  $internships_interview_option2: String!,
  $internships_interview_option3: String!,
  $internships_employment: Boolean!,
  $internships_position: Int!
) {
  createEmployerProfile(
    id_token: $id_token
    citizen_first_name: $citizen_first_name
    citizen_last_name: $citizen_last_name
    citizen_position: $citizen_position
    citizen_organization: $citizen_organization
    organization_division: $organization_division
    organization_location_text: $organization_location_text
    organization_location_lng: $organization_location_lng
    organization_location_lat: $organization_location_lat
    organization_industry: $organization_industry
    organization_industry_other: $organization_industry_other
    organization_product_list: $organization_product_list
    organization_product_employee_count: $organization_product_employee_count
    program_externship_time_first: $program_externship_time_first
    program_externship_time_second: $program_externship_time_second
    program_externship_time_third: $program_externship_time_third
    program_externship_options: $program_externship_options
    program_externship_options_other: $program_externship_options_other
    projects_min: $projects_min
    projects_max: $projects_max
    projects_engagement: $projects_engagement
    projects_engagement_2: $projects_engagement_2
    projects_solutions: $projects_solutions
    internships_project: $internships_project
    internships_project_other: $internships_project_other
    internships_hiring_adult: $internships_hiring_adult
    internships_travel: $internships_travel
    internships_education: $internships_education
    internships_education_other: $internships_education_other
    internships_talent: $internships_talent
    internships_hours_week: $internships_hours_week
    internships_hours_day: $internships_hours_day
    internships_employer_of_record: $internships_employer_of_record
    internships_compensation: $internships_compensation
    internships_budget_min: $internships_budget_min
    internships_budget_max: $internships_budget_max
    internships_interview_option1: $internships_interview_option1
    internships_interview_option2: $internships_interview_option2
    internships_interview_option3: $internships_interview_option3
    internships_employment: $internships_employment
    internships_position: $internships_position
  ) {user_id}
}`

export const PUBLIC_PROFILE_MUTATION = gql`mutation createPublicCitizenProfile(
$id_token: String!,
$first_name: String!,
$last_name: String!,
$citizen_type: String!,
$title: String,
$profile_img_url: String! ,
) {
  createPublicCitizenProfile(
    id_token:$id_token
    first_name:$first_name
    last_name:$last_name
    citizen_type:$citizen_type
    title:$title
    profile_img_url:$profile_img_url
  ){user_id}
}
`
