import './ClientCard.scss'


const Star = <svg className='star' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.18827 0.350129C5.40311 -0.0851935 6.02387 -0.0851945 6.23871 0.350128L7.29855 2.49761C7.38387 2.67047 7.54878 2.79029 7.73955 2.81801L10.1094 3.16237C10.5898 3.23218 10.7817 3.82256 10.434 4.16141L8.71918 5.83298C8.58114 5.96754 8.51814 6.16141 8.55073 6.35141L8.95556 8.71172C9.03762 9.19018 8.53542 9.55505 8.10573 9.32915L5.98604 8.21477C5.81541 8.12506 5.61157 8.12506 5.44094 8.21477L3.32125 9.32915C2.89156 9.55505 2.38936 9.19018 2.47142 8.71172L2.87625 6.35141C2.90883 6.16141 2.84584 5.96754 2.7078 5.83298L0.992937 4.16141C0.645312 3.82256 0.837135 3.23218 1.31754 3.16237L3.68742 2.81801C3.87819 2.79029 4.04311 2.67047 4.12842 2.49761L5.18827 0.350129Z" fill="#2D2D2D"/>
</svg>


interface clientCard {
    comment:string,
    url:string,
    name:string,
}

function ClientCard({comment,url,name}:clientCard) {
    return (
        <div className='cardBody'>
            <p className='cardText'>{comment}</p>
            <div className='clientComments'>
                <img className='clientImg' src={url} alt="pic" />
                <div className='clientCommentsContent'>
                    <p className='clientName'>{name}</p>
                    <p className='clientRating'>{Star} {Star} {Star} {Star} {Star}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientCard