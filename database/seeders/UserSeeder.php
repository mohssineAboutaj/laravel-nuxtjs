<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $password = Hash::make('password');

    $users = array(
      [
        'name'      => 'admin',
        'email'     => 'admin@demo.com',
        'password'  => $password,
      ],
      [
        'name'      => 'user1',
        'email'     => 'user1@demo.com',
        'password'  => $password,
      ],
      [
        'name'      => 'user2',
        'email'     => 'user2@demo.com',
        'password'  => $password,
      ],
      [
        'name'      => 'user3',
        'email'     => 'user3@demo.com',
        'password'  => $password,
      ],
      [
        'name'      => 'user4',
        'email'     => 'user4@demo.com',
        'password'  => $password,
      ],
      [
        'name'      => 'user5',
        'email'     => 'user5@demo.com',
        'password'  => $password,
      ],
    );

    foreach ($users as $user) {
      User::create($user);
    }
  }
}
