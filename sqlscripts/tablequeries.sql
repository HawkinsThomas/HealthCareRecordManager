<-- the query below provides a table of all billing details using health_card_no as the link  with a patients first name --> 
select patient.first_name, billing.billing_id, billing.card_expiry, billing.creditcard_no, billing.cvc FROM billing inner join patient on patient.health_card_no = billing.health_card_no;

<-- the query below provides immunization details based on patients healthcard no in both tables -->
select patient.first_name, immunization.immunization_id, immunization.vaccination_date, immunization.vaccine_name FROM immunization inner join patient on patient.health_card_no = immunization.health_card_no;


<-- the query below shows the relationship between users & patient revision history -->
select user.first_name , patientrevisionhistory.attribute_modified, patientrevisionhistory.date_modified, patientrevisionhistory.health_card_no, patientrevisionhistory.revision_id, patientrevisionhistory.user_name FROM patientrevisionhistory inner join user on user.user_name = patientrevisionhistory.user_name;
