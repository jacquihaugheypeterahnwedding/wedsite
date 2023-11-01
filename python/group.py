from dataclasses import dataclass
from typing import List
from person import Person

@dataclass
class Group():
    name: str 
    people: List[Person]
    email: str 
    alternate_emails: List[str]
    phone: str 
    alternate_phones: List[str]
    address: str
    main_person: Person