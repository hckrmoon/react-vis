import codepen from '../../docs/markdown/getting-started/react-vis-in-codepen.md';
import install from '../../docs/markdown/getting-started/installing-react-vis.md';
import newProject from '../../docs/markdown/getting-started/new-react-vis-project.md';
import first from '../../docs/markdown/getting-started/your-first-chart.md';

import scalesAndData from '../../docs/markdown/scales-and-data.md';
import colors from '../../docs/markdown/colors.md';
import interaction from '../../docs/markdown/interaction.md';
import animation from '../../docs/markdown/animation.md';
import style from '../../docs/markdown/style.md';

import xy from '../../docs/markdown/xy-plot.md';
import series from '../../docs/markdown/series.md';
import legends from '../../docs/markdown/legends.md';
import crosshair from '../../docs/markdown/crosshair.md';
import grids from '../../docs/markdown/grids.md';
import hint from '../../docs/markdown/hint.md';
import axes from '../../docs/markdown/axes.md';
import decorativeAxis from '../../docs/markdown/decorative-axis.md';
import gradients from '../../docs/markdown/gradients.md';
import flexiblePlots from '../../docs/markdown/flexible-plots.md';
import borders from '../../docs/markdown/borders.md';

import arcSeries from '../../docs/markdown/arc-series.md';
import areaSeries from '../../docs/markdown/area-series.md';
import barSeries from '../../docs/markdown/bar-series.md';
import contourSeries from '../../docs/markdown/contour-series.md';
import customSvgSeries from '../../docs/markdown/custom-svg-series.md';
import heatmapSeries from '../../docs/markdown/heatmap-series.md';
import labelSeries from '../../docs/markdown/label-series.md';
import lineSeries from '../../docs/markdown/line-series.md';
import lineMarkSeries from '../../docs/markdown/line-mark-series.md';
import markSeries from '../../docs/markdown/mark-series.md';
import polygonSeries from '../../docs/markdown/polygon-series.md';
import rectSeries from '../../docs/markdown/rect-series.md';
import whiskerSeries from '../../docs/markdown/whisker-series.md';

import sankey from '../../docs/markdown/sankey.md';
import treemap from '../../docs/markdown/treemap.md';
import radar from '../../docs/markdown/radar-chart.md';
import radial from '../../docs/markdown/radial-chart.md';
import sunburst from '../../docs/markdown/sunburst.md';

import plotsEx from '../../docs/markdown/examples/showcases/plots-showcase.md';
import axesEx from '../../docs/markdown/examples/showcases/axes-showcase.md';
import legendsEx from '../../docs/markdown/examples/showcases/legends-showcase.md';
import sunburstEx from '../../docs/markdown/examples/showcases/sunburst-showcase.md';
import radialEx from '../../docs/markdown/examples/showcases/radial-showcase.md';
import sankeyEx from '../../docs/markdown/examples/showcases/sankeys-showcase.md';
import treemapEx from '../../docs/markdown/examples/showcases/treemaps-showcase.md';
import radarEx from '../../docs/markdown/examples/showcases/radar-chart-showcase.md';
import miscEx from '../../docs/markdown/examples/showcases/misc-showcase.md';

import extensibility from '../../docs/markdown/examples/extensibility.md';
import otherThings from '../../docs/markdown/examples/building-things-other-than-charts.md';
import streamGraph from '../../docs/markdown/examples/stream-graph.md';
import responsiveVis from '../../docs/markdown/examples/responsive-vis.md';
import zoomableChart from '../../docs/markdown/examples/zoomable-chart.md';
import gitHistory from '../../docs/markdown/examples/history-example.md';

export default [{
  name: 'Examples',
  path: '/examples',
  data: [{
    name: 'Showcases',
    children: [{
      name: 'Plots',
      markdown: plotsEx,
    }, {
      name: 'Axes',
      markdown: axesEx,
    }, {
      name: 'Legends',
      markdown: legendsEx,
    }, {
      name: 'Sunbursts',
      markdown: sunburstEx,
    }, {
      name: 'Radial',
      markdown: radialEx,
    }, {
      name: 'Sankeys',
      markdown: sankeyEx,
    }, {
      name: 'Treemaps',
      markdown: treemapEx,
    }, {
      name: 'Radar Charts',
      markdown: radarEx,
    }, {
      name: 'Misc',
      markdown: miscEx,
    }],
  }, {
    name: 'Charts',
    children: [{
      name: 'Candlestick',
      markdown: extensibility,
    }, {
      name: 'Force Directed Graph',
      markdown: otherThings,
    }, {
      name: 'Streamgraph',
      markdown: streamGraph,
    }, {
      name: 'Responsive Vis',
      markdown: responsiveVis,
    }, {
      name: 'Zoomable Chart',
      markdown: zoomableChart,
    }, {
      name: 'Git History',
      markdown: gitHistory,
    }],
  }],
}, {
  name: 'Documentation',
  path: '/documentation',
  data: [{
    name: 'Getting Started',
    children: [{
      name: 'React-vis in codepen',
      markdown: codepen
    }, {
      name: 'Installing react-vis',
      markdown: install,
    }, {
      name: 'Creating a new react-vis project',
      markdown: newProject,
    }, {
      name: 'Your first chart',
      markdown: first,
    }],
  }, {
    name: 'General principles',
    children: [{
      name: 'Scales and data',
      markdown: scalesAndData
    }, {
      name: 'Colors',
      markdown: colors,
    }, {
      name: 'Interaction',
      markdown: interaction,
    }, {
      name: 'Animation',
      markdown: animation,
    }, {
      name: 'Style',
      markdown: style,
    }],
  }, {
    name: 'API Reference',
    children: [
      {
        name: 'XY-Plot',
        markdown: xy,
      }, {
        name: 'Series',
        markdown: series,
      }, {
        name: 'Legends',
        markdown: legends,
      }, {
        name: 'Crosshair',
        markdown: crosshair,
      }, {
        name: 'Grids',
        markdown: grids,
      }, {
        name: 'Hint',
        markdown: hint,
      }, {
        name: 'Axes',
        markdown: axes,
      }, {
        name: 'DecorativeAxis',
        markdown: decorativeAxis,
      }, {
        name: 'Gradients',
        markdown: gradients,
      }, {
        name: 'Flexible plots',
        markdown: flexiblePlots,
      }, {
        name: 'Borders',
        markdown: borders,
      },
    ],
  }, {
    name: 'Series reference',
    children: [
      {
        name: 'Arc Series',
        markdown: arcSeries,
      }, {
        name: 'Area Series',
        markdown: arcSeries,
      }, {
        name: 'Bar Series',
        markdown: barSeries,
      }, {
        name: 'Contour Series',
        markdown: contourSeries,
      }, {
        name: 'Custom SVG Series',
        markdown: customSvgSeries,
      }, {
        name: 'Heatmap Series',
        markdown: heatmapSeries,
      }, {
        name: 'Label Series',
        markdown: labelSeries,
      }, {
        name: 'Line Series',
        markdown: lineSeries,
      }, {
        name: 'Line-Mark Series',
        markdown: lineMarkSeries,
      }, {
        name: 'Mark Series',
        markdown: markSeries,
      }, {
        name: 'Polygon Series',
        markdown: polygonSeries,
      }, {
        name: 'Rect Series',
        markdown: rectSeries,
      }, {
        name: 'Whisker Series',
        markdown: whiskerSeries,
      },
    ],
  }, {
    name: 'Other Charts',
    children: [{
      name: 'Sankey Diagram',
      markdown: sankey,
    }, {
      name: 'Treemap',
      markdown: treemap,
    }, {
      name: 'Radar Chart',
      markdown: radar,
    }, {
      name: 'Radial Chart',
      markdown: radial,
    }, {
      name: 'Sunburst Diagram',
      markdown: sunburst,
    }],
  }],
}]
