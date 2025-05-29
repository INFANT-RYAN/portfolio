
export default function Project(obj){
    return(
        <div className="w-[80%] h-64 flex flex-col p-2 bg-black text-white justify-center items-center overflow-hidden border-4 rounded-2xl border-purple-700">
            <div className="p-2" >
                <h3 className="text-2xl font-bold">{obj.name}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, perferendis! Doloremque maiores ipsa nisi, sequi voluptas ut dolores veritatis excepturi est repellendus eligendi accusamus accusantium.</p>
            </div>
        </div>
    )
}