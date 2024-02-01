import { Inject, inject } from "@angular/core";
import {  CanActivateFn, Router } from "@angular/router";
import { ProfileService } from "../services/profile.service";

export const isAdminGuard: CanActivateFn = async (route, state) => {
    const auth = await inject(ProfileService);
    if (!(await auth.isAdmin())) {  // Await the result
        const router = inject(Router);
        router.navigate(['users']);
        return false;
    }
    return true;
};