import './Loading.css'
export default function Loading() {
    return (

        <div >
            {/* <div className='wrapper-for-loader'> */}
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            {/* </div> */}
            </div>
            <div className='text-white'>Loading...</div>            
        </div>
    )
}