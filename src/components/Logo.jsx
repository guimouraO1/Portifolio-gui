import gui from './gui.jpg'

function Logo(){
    const styles = {
        width: 300, 
        height: 400,
        margin: '120px'
    }

    const userPic = <div className='userPic'><img style={styles} src={gui} alt="guilherme" /></div>
    return userPic
}

export default Logo