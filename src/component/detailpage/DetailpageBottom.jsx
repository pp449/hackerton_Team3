function DetailpageBottom(props) {
    return(
        <div>
            <div className="mb-4 text-3xl font-GoogleFont2">📢 소개</div>
            <p className="text-2xl text-base text-gray-900">{props.value.content}</p><br/><br/>
            <div className="mb-4 text-3xl font-GoogleFont2">📢 주소</div>
            <p className="text-2xl text-base text-gray-900">{props.value.location}</p>
        </div>
    )
}

export default DetailpageBottom