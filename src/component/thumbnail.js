import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { DataContext } from './product';

export default function StandardImageList() {
    const { images, thumbnail } = React.useContext(DataContext);
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <ImageList sx={{ width: "50%", height: 400, border: '5px solid #000' }} cols={2} rowHeight={100}>
                    {images.map((item, index) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                alt={index}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <ImageListItem key={thumbnail} sx={{ width: "50", height: "500px", border: '5px solid #000' }}>
                    <img
                        srcSet={`${thumbnail}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${thumbnail}?w=164&h=164&fit=crop&auto=format`}
                        alt={"thumbnail"}
                        loading="lazy"
                    />
                </ImageListItem>
            </div>
        </>
    );
}