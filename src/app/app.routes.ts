import { Routes } from '@angular/router';
import { SparkAnalysisComponent } from './components/spark-analysis/spark-analysis.component';
import { StocksAnalysisComponent } from './components/stocks-analysis/stocks-analysis.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SpinnerComponent } from './spinner/spinner.component';

export const routes: Routes = [
    {path: "", redirectTo:'/about-me', pathMatch:'full'},
    {path: 'about-me', component: AboutMeComponent},
    {path: "sparkAnalysis", component: SparkAnalysisComponent},
    {path: "stockAnalysis", component: StocksAnalysisComponent},
    {path: "spinner", component: SpinnerComponent},
];
