<script>
import { Line } from "vue-chartjs";
import { mapState } from 'vuex';

export default {
  extends: Line,
  props: [
  'chartData', 
  'labelsData',
  'chartStatus',
  'chartLabel'
  ],
  data() {
    return {
      gradient: null,
      borderColor: '',
    };
  },
  mounted() {
  	//console.log(this.chartData);
  	if(this.chartStatus !== 'Success'){
  		this.gradient = this.$refs.canvas
	      .getContext("2d")
	      .createLinearGradient(0, 0, 0, 450);
	    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
	    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
	    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
	    this.borderColor = '#FC2525';
  	} else {
	  	this.gradient = this.$refs.canvas
	      .getContext("2d")
	      .createLinearGradient(0, 0, 0, 450);
	      this.gradient.addColorStop(0, "rgba(0, 231, 255, 0.9)");
		  this.gradient.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
		  this.gradient.addColorStop(1, "rgba(0, 231, 255, 0)");
		  this.borderColor = '#05CBE1';
  	}

    this.renderChart(
      {
        labels: this.labelsData,
        datasets: [
        {
            label: this.chartLabel,
            borderColor: this.borderColor,
            pointBackgroundColor: this.borderColor,
            pointBorderColor: this.borderColor,
            borderWidth: 1,
            backgroundColor: this.gradient,
            data: this.chartData,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
