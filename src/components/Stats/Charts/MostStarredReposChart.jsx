import React, { useEffect, useContext } from 'react';
import { GitHubContext } from 'context';
import { buildChart, backgroundColor, borderColor } from 'utils';

const MostStarredReposChart = ({ chartSize: { height, width } }) => {
    const {
        stats: { topRepos },
    } = useContext(GitHubContext);

    const initMostStarredReposChart = () => {
        const ctx = document.getElementById('mostStarredReposChart');
        const labels = topRepos.map(el => el.name);
        const data = topRepos.map(el => el.stargazers_count);

        if (data.length > 0) {
            const chartType = 'bar';
            const axes = true;
            const legend = false;
            const label = {
                yAxis: 'stars',
            };
            const config = {
                ctx,
                chartType,
                labels,
                data,
                backgroundColor,
                borderColor,
                axes,
                legend,
                label,
            };
            buildChart(config);
        }
    };

    useEffect(() => {
        initMostStarredReposChart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topRepos]);

    return <canvas id="mostStarredReposChart" height={height} width={width} />;
};

export default MostStarredReposChart;
