import React from 'react';
import {useEffect} from 'react';
import GalleryBlocks from '../operations/gallerycomponent/GalleryBlocks.jsx';

export default function Gallery() {
  useEffect(() =>{
    document.title = 'LUMOS ll Պատկերասրահ'
  }, [])
  return (
    <div id="galery">
        <GalleryBlocks />
    </div>
  );
}