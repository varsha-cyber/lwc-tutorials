public with sharing class ContactManager {

    @AuraEnabled (cacheable=true)
    public static list<contact> getContact(){
        list<contact>contacts;
        
    
        try {
           contacts=[select id,lastname,phone from contact WITH SECURITY_ENFORCED limit 5];
        } catch (QueryException e) {
           system.debug(e.getMessage());
       
        }
        return contacts;
    } 
    
    
    
}
