
import Images from './Images.json'
import Header from './Header';

function images()
{
    return(
        <>
            <Header/>
            <h2>Welcome to Images Page </h2>
            <div className='container'>
                <div className='row'> {Images.images.map((data)=>
                <div className='col-4'>
                    <img src={data.img}style={{"height":"200px","width":"200px"}}/>
                    </div>
                )}
                </div>

            </div>
        </>
    )
}

export default images ;