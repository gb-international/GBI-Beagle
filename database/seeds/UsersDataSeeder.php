<?php

use Illuminate\Database\Seeder;
use App\User;
use Spatie\Permission\Models\Role;
class UsersDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        // Add the master administrator, user id of 1
        $user = User::create([
            'name'              => 'GBI Administrator',
            'email'             => 'admin@gbinternational.in',
            'password'          => bcrypt('gbi@224225')
        ]);
        $role = Role::create(['name'=>'SuperAdmin']);
        $role = Role::create(['name'=>'accounts']);
        $role = Role::create(['name'=>'Reservations']);
        $user->user_role = '1';
        $user->user_type = 'SuperAdmin';
        $user->save();
        $user->assignRole('SuperAdmin');
    }
}
