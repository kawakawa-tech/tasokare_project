'use client'
import { Inter } from '@next/font/google'
import React from "react"
import Typical from "react-typical";


const inter = Inter({ subsets: ['latin'] })

export function Opentext() {
  return (
    <div>
        <Typical
            steps={[
                "オ ウ マ ガ ト キ f i l m , オ ウ マ ガ ト キ の 裏 通 り",2500,
                "2 つ の 狭 間 に あ る も う 一 つ の オ ウ マ ガ ト キ",1500,
                "開 演",800,
            ]}
        />
        
    </div>
      
  )
}
