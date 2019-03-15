import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../app/pages/home/home.component";
import { TrendingComponent } from "src/app/pages/trending/trending.component";
import { RandomComponent } from "src/app/pages/random/random.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "trending", component: TrendingComponent },
  { path: "random", component: RandomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
