const product = {
    name: 'Basic Tee 6-Pack',
    href: '#',
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    address:
        '부산광역시 북구',
}

function DetailpageBottom() {
    return(
        <div>
            <div className="text-2xl font-GoogleFont2">📢 소개</div>
            <p className="text-base text-gray-900">{product.description}</p><br/><br/>
            <div className="text-2xl font-GoogleFont2">📢 주소</div>
            <p className="text-base text-gray-900">{product.address}</p>
        </div>
    )
}

export default DetailpageBottom