import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { getStoredBook } from '../../Utility/LocalStorage';

// Custom path for the bars (Triangle shape)
const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`;

// Custom Bar component with triangle shape
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const pages = useLoaderData(); // Fetch data via loader
    const [listedPages, setListedPages] = useState([]); // Initialize state

    useEffect(() => {
        const storedPagesId = getStoredBook(); // Fetch stored page IDs
        if (pages?.length > 0) {
            const pagesListed = pages.filter((page) =>
                storedPagesId.includes(page.bookId) // Match stored IDs with data
            );
            setListedPages(pagesListed); // Update state
        }
    }, [pages]);

    // Transform data for the chart
    const chartData = listedPages.map((page) => ({
        name: page.bookName,
        pages: page.pages,
    }));

    return (
        <div>
            <h1>This is the chart page</h1>
            <div>
                {/* Render chart with dynamic data */}
                <BarChart width={600} height={300} data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} />
                </BarChart>
            </div>
        </div>
    );
};

export default PagesToRead;
