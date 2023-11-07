import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const RoomTab = ({room, filterItem}) => {

const {RoomDescription, Image} = room || [];







    return (
      
        <>
       
            <button onClick={() => filterItem(RoomDescription)} className='btn btn-warning'>{RoomDescription}</button>
     

 
          </>
        
       
    );
};

export default RoomTab;