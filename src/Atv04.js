import { getImagemUrl } from "./Utils";
import './Utils';  
import {Link} from "react-router-dom"


function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImagemUrl(person, size)}  
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        
        <div>
            
            
            <div className='goku'>
                <Avatar
                    size={100}
                    person={{
                        name: 'Goku',
                        imgId: 'YfeOqp2'
                    }}
                />
            </div>
            <div className="vedita">
                <Avatar
                    size={50}
                    person={{
                        name: 'Vedita',
                        imgId: '1bX5HQ6'
                    }}
                />
            </div>

            <div className="naruto">
                <Avatar
                    size={80}
                    person={{
                        name: 'Naruto',
                        imgId: 'OK567lh'  
                    }}
                />
            </div>
            <Link to='/'>Voltar</Link>  
        </div>
    );
}
