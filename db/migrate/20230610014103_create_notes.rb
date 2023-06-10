class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.integer :meeting_id
      t.string :criteria1
      t.string :note1
      t.string :criteria2
      t.string :note2
      t.string :criteria3
      t.string :note3

      t.timestamps
    end
  end
end
