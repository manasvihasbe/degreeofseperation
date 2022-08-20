import {useState} from 'react'
import Navbar from '../navbar/Navbar';
import AddPeople from '../sections/addPeople/AddPeople';
import AddRelationship from '../sections/addRelationship/AddRelationship';
import Separation from '../sections/separation/Separation';


const Home:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle:any = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
          
            <Navbar toggle={toggle} />
            <AddPeople />
            <AddRelationship />
            <Separation />
            
        </>
    )
}

export default Home
