export function Profile(){

    return(

        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DjGsaTGkQLQBkFLbXCT9sl1if0K9d-tEqQ&usqp=CAU"
            alt="Ana da Silva"
        />
    );
}

export default function Gallery(){
    return(
        <section>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}