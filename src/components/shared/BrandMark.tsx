'use client';
import Image from 'next/image'; import { useState } from 'react';
export function BrandMark({footer=false}:{footer?:boolean}){const [missing,setMissing]=useState(false); return missing?<div className={`grid h-12 w-12 place-items-center rounded-full ${footer?'bg-[#D94D83]':'bg-[#97134F]'} text-xl text-white`}>GR</div>:<Image src="/branding/globo-rosa-logo.png" alt="Globo Rosa" width={footer?48:56} height={footer?48:56} className="h-12 w-12 object-contain" onError={()=>setMissing(true)}/>}
