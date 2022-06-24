import loading from '../../assets/images/gif/loading.gif'

const Loading = () => {
    return (
      <div className='Loading' style={{width: 'maxContent', height: '600px'}}>
        
        <img
            src={loading}
            alt="Loading..."
            style={{
                width: '200px',
                height: '400px',
                margin: 'auto',
                display: 'block',
                paddingTop:'200px'
            }}
        />
        </div>
    )
}

export default Loading
