public class caseFutureClass {
    @Futuremethod
    Public static void myCasemethod(list<id>ids)

    {
      list<accounts>acclist=[select id,cases_from_phone__c ,(select accountid,SourceId from cases) from account where id IN :ids];
        
      for(account acc:acclist)
      {
        if (acc.SourceId=phone){
    
        acc.cases_from_phone__c= acc.cases.size();
        }
      
        if (!acclist.isempty())
        update acclist;
        system.debug('this is worked');
      }



    }
















    public caseFutureClass() {

    }
}