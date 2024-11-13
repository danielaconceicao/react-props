import style from './postsCards.module.css'

export default function postsCards({data}){
    return(
     
            <div className={style.cards}>
                <div className="card">
                    <img src={data.image} alt="" />
                    <div className={style.cardbody}>
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                        <span>{data.tags}</span>
                    </div>
                </div>
            </div>
       
    )
}