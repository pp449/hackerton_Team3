import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'


function DetailpageTop(props) {
  const product = {
    highlights: [
      '날짜 : ' + props.value.date,
      '주최 : ' + props.value.host,
      props.value.isFree ? '무료' : '유료',
      props.value.status == 'START' ? '예정' : props.value.status == 'END' ? '종료' : '진행 중'
    ],
  }

  return(
    <div className="bg-white">
      <div className="pt-6">

        {/* Product info */}
        <div className="max-w-4xl mx-auto pt-10 pb-16 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          </div>
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div>
              <h3 className="sr-only">Description</h3>
            </div>

            <div className="mt-10 pt-28 pl-12">
              <div className="text-5xl mb-9 font-bold">{props.value.title}</div>
            
              <h3 className="font-medium text-gray-900 text-3xl font-GoogleFont2">축제 정보</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400 text-2xl">
                      <span className="text-gray-600 font-GoogleFont2">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <img
              src={props.value.imgUrl}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default DetailpageTop;