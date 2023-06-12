import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { iM } from "@angular/core/src/render3";

import { AddTripComponent } from "./add-trip/add-trip.component";
import { EditTripComponent } from "./edit-trip/edit-trip.component";

const routes: Routes = [
  { path: "add-trip", component: AddTripComponent },
  { path: "edit-trip", component: EditTripComponent },
  {
    path: "",
    component: TripListingComponent,
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApproutingModule {}
