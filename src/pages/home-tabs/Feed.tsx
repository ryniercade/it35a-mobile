
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonListHeader, IonLabel, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow, IonIcon } from '@ionic/react';
import { chatboxEllipsesOutline, shareOutline, thumbsUpOutline } from 'ionicons/icons';

const Feed: React.FC = () =>{

   const labels = [
        {name:'Video Games'},
        {name:'Pokémon Yellow'},
        {name:'Mega Man X'},
        {name:'Pac-Man'},
        {name:'Super Mario World'},
   ]

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Feed</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
               <IonContent className="ion-padding">
                  {/**/}
           {labels.map((item, index) =>(

             <IonList>
               <IonCard>
                    <IonGrid>
                        <IonRow>
                           <IonCol>
                              <img style={{width:"200px", height:"200px"}} alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                           </IonCol>
                            <IonCol>
                        
                
                <IonCardHeader>
                <IonCardTitle>{item.name}</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                 <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                     </IonCol>
                     </IonRow>
                    </IonGrid>
                    
                       <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonButtons>
                          <IonIcon icon={thumbsUpOutline}></IonIcon>
                          <IonLabel style={ {marginLeft:"3px"}}> Like</IonLabel>
                        </IonButtons>
                      </IonCol>
                      <IonCol>
                         <IonButtons>
                          <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                          <IonLabel style={ {marginLeft:"3px"}}> Comment</IonLabel>
                        </IonButtons>
                      </IonCol>
                      <IonCol>
                         <IonButtons>
                          <IonIcon icon={shareOutline}></IonIcon>
                          <IonLabel style={ {marginLeft:"3px"}}> Share</IonLabel>
                        </IonButtons>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                  
                </IonCard>
                          
              
            </IonList>
                     
              ))}
     
              </IonContent>
              </IonPage>
      );

};
export default Feed;
