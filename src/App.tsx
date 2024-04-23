import { Redirect, Route } from 'react-router-dom';
import { IonApp,  IonList, IonInput,IonItem, setupIonicReact, IonTextarea, IonRadioGroup,IonRadio, IonRange, IonCheckbox, IonSelectOption, IonSelect} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//IonRouterOutlet, setupIonicReact
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
   <IonList>
      <IonItem>
        <IonInput label="Default label" placeholder="Enter text"></IonInput>
      </IonItem>

      <IonItem>
        <IonTextarea label="Regular textarea" placeholder="Type something here"></IonTextarea>
      </IonItem>
      <IonItem>
      <IonRadioGroup value="strawberries">
      <IonRadio value="grapes">Grapes</IonRadio>
      <br />
      <IonRadio value="strawberries">Strawberries</IonRadio>
      <br />
      <IonRadio value="pineapple">Pineapple</IonRadio>
      <br />
      <IonRadio value="cherries">Cherries</IonRadio>
    </IonRadioGroup>
    </IonItem>
      <br />
      <IonItem>
      <IonRange labelPlacement="stacked" label="Stacked Label"></IonRange>
      </IonItem>
      <IonItem>
        <IonSelect label="Default label" placeholder="Favorite Fruit">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
      </IonItem>
    </IonList>
  </IonApp>
);

export default App;
