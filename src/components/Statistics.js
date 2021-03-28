import React, { useEffect, useState } from "react";

import { Doughnut, Bar, Line } from "react-chartjs-2";

import axiosInstance from "../axios";
import LogNeeded from "./LogNeeded";
import "./styles/Stats.css";

const options = {
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};

let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");

function Statistics({ isLoged }) {
  const [data, setData] = useState(null);
  const [timeFrame, setTimeFrame] = useState({
    init: `${year - 1}-${month < 10 ? "0" + month : month}-${
      date < 10 ? "0" + date : date
    }`,
    end: `${year}-${month < 10 ? "0" + month : month}-${
      date < 10 ? "0" + date : date
    }`,
  });

  useEffect(() => {
    submit();
  }, []);

  const submit = () => {
    axiosInstance.post("api/statistics/", timeFrame).then((response) => {
      let resData = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [],
      };
      let series = response.data.series;
      series.forEach((serie) => {
        serie.backgroundColor =
          "#" +
          ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
      });
      resData.datasets = series;
      resData.labels = response.data.labels;
      setData(resData);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  if (!isLoged) return <LogNeeded />;
  return (
    <div>
      <Line data={data} options={options} />
      <form className="stats-form">
        <span id="dates-container">
          <span className="date">
            <label htmlFor="initial-date">Fecha Inicio</label>
            <input
              type="date"
              name="initial"
              id="initial-date"
              value={timeFrame.init}
              onChange={(e) => {
                setTimeFrame({ ...timeFrame, init: e.target.value });
              }}
            />
          </span>
          <span className="date">
            <label htmlFor="end-date">Fecha Final</label>
            <input
              type="date"
              name="end"
              id="end-date"
              value={timeFrame.end}
              onChange={(e) => {
                setTimeFrame({ ...timeFrame, end: e.target.value });
              }}
            />
          </span>
        </span>
        <input
          type="submit"
          value="Cargar"
          onClick={handleSubmit}
          id="submit-btn"
        />
      </form>
    </div>
  );
}

export default Statistics;

/*

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

(function(global) {
	var MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = MONTHS[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};
*/
