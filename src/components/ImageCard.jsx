import Image from "next/image";
import React from "react";

export default function ImageCard(props) {
  return (
    <div className="bg-slate-900 text-left p-3 rounded">
      <Image
        src={props.imageUrl}
        width={300}
        alt="image"
        height={400}
        className="rounded-xl w-full"
      />
      <div className="pt-2">
        <h1>
          <span className="rounded p-1">
            <div className="flex flex-row text-center justify-between">
              <div className="inline-block basis-3/4 text-left pl-2">
                <span classname="font-semibold">
                  Photo By :
                </span>
              {" ".concat(props.publisher)}
              </div>
              <div className="inline-block basis-1/4">
                <span className="rounded px-2 mt-2 text-lg hover:text-sky-500">
                  <i class="fa-solid fa-thumbs-up"></i>
                </span>
                <span className="rounded px-2 mt-2 text-lg hover:text-green-500">
                  <i class="fa-solid fa-download"></i>
                </span>
              </div>
            </div>
          </span>
        </h1>
        <div className="hashtags mt-0 mb-2 pl-2">
          <span className="hashtag rounded-lg bg-slate-500 p-1">#universe</span>
        </div>
      </div>
    </div>
  );
}
