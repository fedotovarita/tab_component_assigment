import { Tab, Tabs } from './Tabs/Tabs';


const tabs = [ 
  {name: 'Job Focus', disabled: false},
  {name: 'Soft Skills', disabled: false},
  {name: 'Technical Skills', disabled: true},
  {name: 'Functional Expertise', disabled: false},
  {name: 'Soft Expertise', disabled: false},
  {name: 'Patent Expertice', disabled: false},
  {name: 'Personal Expertise', disabled: false},
  {name: 'Hard Expertise', disabled: false},
  {name: 'Domain Expertise', disabled: false},
  {name: 'Social Expertise', disabled: false},
  {name: 'Reffered expertise', disabled: false},
];
  
const tabsList = tabs.map(t => <Tab name={t.name} disabled={t.disabled}/>);
function App() {
  return (
    <>
      <Tabs>
        { tabsList }
      </Tabs>
      <div className="shadow"/>
    </>

  );
}

export default App;
